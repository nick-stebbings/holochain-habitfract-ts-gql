use hdk::prelude::*;
use hdk::prelude::holo_hash::*;
use super::Domain;


#[derive(Serialize, Deserialize, Debug)]
pub struct NewDomainOutput {
  header_hash: HeaderHashB64,
  entry_hash: EntryHashB64,
}

#[hdk_extern]
pub fn create_domain(domain: Domain) -> ExternResult<NewDomainOutput> {
  let header_hash = create_entry(&domain)?;

  let entry_hash = hash_entry(&domain)?;

  let output = NewDomainOutput {
    header_hash: HeaderHashB64::from(header_hash),
    entry_hash: EntryHashB64::from(entry_hash)
  };

  Ok(output)
}



