import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USE'}
          joinedDate={'02.19.2023'}
        />
        <CompanyRow
          id={2}
          category={'Products'}
          company={'Pepsi'}
          status={Status.NotActive}
          promotion={false}
          country={'USE'}
          joinedDate={'10.19.2021'}
        />
      </CompanyTable>
    </>
  );
}
