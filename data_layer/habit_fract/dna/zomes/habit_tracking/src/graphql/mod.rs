pub mod mutations;
pub mod queries;
use crate::utils::error;
use hdk::prelude::*;
use juniper::{http::GraphQLBatchRequest, EmptySubscription};
use serde_json;

use crate::graphql::{mutations::Mutation, queries::Query};

pub struct Context {}

impl Context {
    fn new() -> Self {
        Self {}
    }
}

impl juniper::Context for Context {}

#[derive(Debug, Serialize, Deserialize, SerializedBytes)]
pub struct CallPayload {
    data: String,
}

#[derive(Debug, Serialize, Deserialize, SerializedBytes, Clone, new)]
pub struct CallResponse {
    pub data: String,
}

#[hdk_extern]
pub fn graphql(call_payload: CallPayload) -> ExternResult<CallResponse> {
    debug!("CallPayload: {:?}", call_payload);

    let request = serde_json::from_str::<GraphQLBatchRequest>(&call_payload.data)
        .or(error("Could not parse request"))?;
    debug!("GraphQLBatchRequest: {:?}", request);

    let context = Context::new();
    let schema = juniper::RootNode::new(Query, Mutation, EmptySubscription::new());
    let response = request.execute_sync(&schema, &context);
    let response_string = serde_json::to_string(&response).or(error("Could not parse response"))?;
    debug!("GraphQL Response String: {:?}", response_string);

    Ok(CallResponse::new(response_string))
}
