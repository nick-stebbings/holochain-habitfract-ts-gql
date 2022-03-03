use crate::features::domain::Domain;

use juniper::graphql_interface;

#[graphql_interface(for = [Domain])] // enumerating all implementers is mandatory
pub trait Node {
    fn id(&self) -> &juniper::ID;
}
