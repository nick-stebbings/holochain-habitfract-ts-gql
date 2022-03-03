use hdk::prelude::*;
use juniper::{
    ExecutionResult, Executor, GraphQLType, GraphQLValue, ScalarValue, Selection, Value,
};

pub fn error<T>(reason: &str) -> ExternResult<T> {
    Err(err(reason))
}

pub(crate) fn err(reason: &str) -> WasmError {
    WasmError::Guest(String::from(reason))
}

pub fn try_get_and_convert<T: TryFrom<SerializedBytes>>(entry_hash: EntryHash) -> ExternResult<T> {
    match get(entry_hash.clone(), GetOptions::default())? {
        Some(element) => try_from_element(element),
        None => error("Entry not found"),
    }
}

pub fn try_from_element<T: TryFrom<SerializedBytes>>(element: Element) -> ExternResult<T> {
    match element.entry() {
        element::ElementEntry::Present(entry) => try_from_entry::<T>(entry.clone()),
        _ => error("Could not convert element"),
    }
}

pub fn try_from_entry<T: TryFrom<SerializedBytes>>(entry: Entry) -> ExternResult<T> {
    match entry {
        Entry::App(content) => match T::try_from(content.into_sb()) {
            Ok(e) => Ok(e),
            Err(_) => error("Could not convert entry"),
        },
        _ => error("Could not convert entry"),
    }
}

#[derive(Debug, Serialize, Deserialize, SerializedBytes, Clone, PartialEq)]
pub struct HashString(String);

// impl<S> GraphQLValue<S> for HashString
// where
//     S: ScalarValue,
// {
//     type Context = ();
//     type TypeInfo = ();

//     fn type_name<'i>(&self, info: &'i Self::TypeInfo) -> Option<&'i str> {
//         <Self as GraphQLType<S>>::name(info)
//     }

//     fn resolve(
//         &self,
//         _: &(),
//         _: Option<&[Selection<S>]>,
//         _: &Executor<Self::Context, S>,
//     ) -> ExecutionResult<S> {
//         let HashString(string_value) = self;
//         Ok(Value::scalar(string_value.into()))
//     }
// }
#[derive(Hash, Eq, Debug, Serialize, Deserialize, SerializedBytes, Clone, PartialEq)]
#[serde(try_from = "HashString")]
#[serde(into = "HashString")]
pub struct WrappedAgentPubKey(pub AgentPubKey);

impl From<WrappedAgentPubKey> for AgentPubKey {
    fn from(ui_string_hash: WrappedAgentPubKey) -> Self {
        return ui_string_hash.0;
    }
}

impl TryFrom<HashString> for WrappedAgentPubKey {
    type Error = String;
    fn try_from(ui_string_hash: HashString) -> Result<Self, Self::Error> {
        match AgentPubKey::try_from(ui_string_hash.0) {
            Ok(address) => Ok(Self(address)),
            Err(e) => Err(format!("{:?}", e)),
        }
    }
}

impl From<WrappedAgentPubKey> for HashString {
    fn from(wrapped_agent_pub_key: WrappedAgentPubKey) -> Self {
        Self(wrapped_agent_pub_key.0.to_string())
    }
}
