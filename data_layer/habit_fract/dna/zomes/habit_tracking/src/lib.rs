use hdk::prelude::*;

mod features;
mod graphql;
mod node;
mod utils;

use features::domain::entry::DomainEntry;
use juniper::{http::GraphQLBatchRequest, EmptySubscription, FieldResult};

#[macro_use]
extern crate derive_new;

entry_defs![DomainEntry::entry_def()];

#[hdk_extern]
fn init(_: ()) -> ExternResult<InitCallbackResult> {
    // // Create lists and items to start with
    // let list_input = CreateListInput {
    //     name: String::from("Work"),
    // };
    // list::handlers::list_create(list_input).expect("Init error");

    // let list = CreateListInput {
    //     name: String::from("Family"),
    // };
    // list::handlers::list_create(list).expect("Init error");

    Ok(InitCallbackResult::Pass)
}
