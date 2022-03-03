use hdk::prelude::*;
use juniper::{GraphQLInputObject, GraphQLObject};

pub mod entry;
pub mod handlers;

use super::domain::entry::DomainEntry;
use crate::features::PageInfo;
use crate::node;
use crate::utils::HashString;

#[derive(GraphQLObject, Debug, Serialize, Deserialize, SerializedBytes, Clone)]
#[graphql(impl = node::NodeValue)]
pub struct Domain {
    id: juniper::ID,
    description: String,
    hashtag: String,
}

impl Domain {
    pub fn new_from_entry(domain_entry: DomainEntry) -> Domain {
        Self {
            id: domain_entry.id,
            description: domain_entry.description,
            hashtag: domain_entry.hashtag,
        }
    }
}

// #[graphql_interface]
// impl node::Node for Domain {
//     fn id(&self) -> &juniper::ID {
//         return &self.id;
//     }
// }

#[derive(GraphQLInputObject, Debug, Serialize, Deserialize, SerializedBytes, Clone)]
pub struct CreateDomainInput {
    id: juniper::ID,
    description: String,
    hashtag: String,
}
#[derive(GraphQLInputObject, Debug, Serialize, Deserialize, SerializedBytes, Clone)]
pub struct UpdateDomainInput {
    id: juniper::ID,
    description: String,
    hashtag: String,
}

#[derive(GraphQLInputObject, Debug, Serialize, Deserialize, SerializedBytes, Clone)]
pub struct DeleteDomainInput {
    id: juniper::ID,
}

#[derive(GraphQLObject, Debug, Serialize, Deserialize, SerializedBytes, Clone, new)]
pub struct CrudDomainPayload {
    agent_address: String, //HashString,
    domain: Domain,
}

#[derive(GraphQLObject, Debug, Serialize, Deserialize, SerializedBytes, Clone)]
pub struct DomainConnection {
    edges: Vec<DomainEdge>,
    page_info: PageInfo,
}

impl DomainConnection {
    pub fn empty() -> DomainConnection {
        return DomainConnection {
            edges: Vec::new(),
            page_info: PageInfo::new(),
        };
    }
}

#[derive(GraphQLObject, Debug, Serialize, Deserialize, SerializedBytes, Clone)]
pub struct DomainEdge {
    cursor: String,
    node: Domain,
}

impl DomainEdge {
    pub fn new(domain: Domain) -> DomainEdge {
        return DomainEdge {
            cursor: String::from("NOT IMPLEMENTED"),
            node: domain,
        };
    }
}
