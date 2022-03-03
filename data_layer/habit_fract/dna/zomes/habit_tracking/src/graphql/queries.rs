use juniper::{graphql_object, FieldResult};

use crate::features::domain::{handlers, Domain};

use super::Context;

pub struct Query;

#[graphql_object(Context = Context)]
impl Query {
    fn apiVersion() -> &'static str {
        "0.0.1"
    }

    fn domain(id: juniper::ID) -> FieldResult<Domain> {
        handlers::get_domain(id)
    }

    // fn lists() -> FieldResult<list::ListConnection> {
    //     list::handlers::lists()
    // }

    // fn item(id: juniper::ID) -> FieldResult<item::Item> {
    //     item::handlers::item(id)
    // }

    // fn items(id: juniper::ID) -> FieldResult<item::ItemConnection> {
    //     item::handlers::items(id)
    // }

    // fn node(id: juniper::ID) -> FieldResult<node::NodeValue> {
    //     let id_string = id.to_string();
    //     if id_string.contains(".") {
    //         Ok(item::handlers::item(id)?.into()) // Item id contains '.'
    //     } else {
    //         Ok(list::handlers::list(id)?.into()) // List id doesn't
    //     }
    // }
}
