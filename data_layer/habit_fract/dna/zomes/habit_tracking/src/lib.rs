use hdk::prelude::*;

mod features;
mod node;
mod utils;

use features::domain::entry::DomainEntry;

entry_defs![DomainEntry::entry_def()];
