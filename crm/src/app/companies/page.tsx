import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/tollbar';
import SearchInput from '../components/search-input';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import StatusLabel, { Status } from '../components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={"Products"}
          company={"Costco"}
          country={"USA"}
          promotion={true}
          status={Status.Pending}
          joinedDate={"02.18.2023"}
        />
      </CompanyTable>
    </>
  );
}
