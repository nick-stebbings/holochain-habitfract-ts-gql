use hdk::prelude::*;

#[hdk_entry(id = "domain")]
#[derive(Clone)]
#[serde(rename_all = "camelCase")]
pub struct Domain {
    pub name: String,
    pub hashtag: String,
}
