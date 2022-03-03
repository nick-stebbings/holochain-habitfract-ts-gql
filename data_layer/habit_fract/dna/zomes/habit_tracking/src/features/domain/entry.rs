use hdk::prelude::*;

#[hdk_entry(id = "domain", visibility = "public")]
#[serde(rename_all = "camelCase")]
#[derive(Clone)]
pub struct DomainEntry {
    pub id: juniper::ID,
    pub description: String,
    pub hashtag: String,
}

impl DomainEntry {
    pub fn new(id: juniper::ID, description: String, hashtag: String) -> DomainEntry {
        Self {
            id,
            description,
            hashtag,
        }
    }
}
