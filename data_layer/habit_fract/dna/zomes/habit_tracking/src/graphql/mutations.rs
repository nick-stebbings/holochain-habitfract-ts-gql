use juniper::{graphql_object, FieldResult};

use super::Context;
use crate::features::domain::{self, CreateDomainInput};

pub struct Mutation;

#[graphql_object(Context = Context)]
impl Mutation {
    fn createDomain(input: CreateDomainInput) -> FieldResult<domain::CrudDomainPayload> {
        domain::handlers::create_domain(input)
    }

    // fn createItem(input: CreateItemInput) -> FieldResult<item::CrudItemPayload> {
    //     item::handlers::item_create(input)
    // }

    // fn updateItem(input: UpdateItemInput) -> FieldResult<item::CrudItemPayload> {
    //     item::handlers::item_update(input)
    // }

    // fn toggleItemDone(input: ToggleItemDoneInput) -> FieldResult<item::CrudItemPayload> {
    //     item::handlers::item_toggle_done(input)
    // }

    // fn deleteItem(input: DeleteItemInput) -> FieldResult<item::CrudItemPayload> {
    //     item::handlers::item_delete(input)
    // }
}
