use super::{CreateDomainInput, CrudDomainPayload, Domain, DomainEntry};
use crate::utils::{self, WrappedAgentPubKey};
use hdk::prelude::*;
use holo_hash::AgentPubKey;
use juniper::FieldResult;

pub fn get_domain(id: juniper::ID) -> FieldResult<Domain> {
    Ok(Domain::new_from_entry(domain_entry(id)?))
}

pub fn domain_entry(id: juniper::ID) -> FieldResult<DomainEntry> {
    Ok(utils::try_get_and_convert(domain_entry_hash(id)?)?)
}

pub fn domain_entry_hash(id: juniper::ID) -> FieldResult<EntryHash> {
    let agent_info = agent_info()?;
    let agent_address: AnyDhtHash = agent_info.agent_initial_pubkey.clone().into();

    let domain_links = get_links(agent_address.into(), Some(LinkTag::new("domain")))?.into_iter();

    for domain_link in domain_links {
        let domain_entry: DomainEntry = utils::try_get_and_convert(domain_link.target.clone())?;
        if domain_entry.id == id {
            return Ok(domain_link.target);
        }
    }

    Err(utils::err("Domain not found.").into())
}

pub fn create_domain(domain: CreateDomainInput) -> FieldResult<CrudDomainPayload> {
    let _agent_info = agent_info()?;
    let entry = DomainEntry::new(domain.id, domain.description, domain.hashtag);

    let _header_hash = create_entry(entry.clone())?;
    let _entry_hash = hash_entry(entry.clone())?;

    //TODO create link
    let agent_address = "a pub key".to_string();
    // WrappedAgentPubKey::from(AgentPubKey::from(agent_info.agent_initial_pubkey)).into();
    let output = CrudDomainPayload {
        agent_address,
        domain: Domain::new_from_entry(entry),
    };

    Ok(output)
}
