import path from 'path';

export interface SummaryStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: string;
  income: string;
}

export interface Country {
  id: string;
  title: string;
}
export interface Category {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotion: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}
const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getSummaryStats = () => {
  const items = [];
  for (let i = 0; i < 4; i++) {
    items.push({
      promotions: i + 1,
      categories: 1,
      newCompanies: 12,
      activeCompanies: 12,
    });
  }
  return Promise.resolve(items);
};
// export const getSummaryStats = (init?: RequestInit) => {
//   return sendRequest<SummaryStats>(buildUrl('summary-stats', '1'), init);
// };

// export const getSummarySales = (init?: RequestInit) => {
//   return sendRequest<SummarySales[]>(buildUrl('summary-sales'), init);
// };
export const getSummarySales = () => {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push({
      companyId: i + 1,
      companyTitle: 'Costco Wholesale',
      sold: 459,
      income: 600,
    });
  }
  return Promise.resolve(items);
};

export const getCountries = () => {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push({
      id: i + 1,
      title: 'Canada',
    });
  }
  return Promise.resolve(items);
};
// export const getCountries = (init?: RequestInit) => {
//   return sendRequest<Country[]>(buildUrl('countries'), init);
// };

// export const getCategories = (init?: RequestInit) => {
//   return sendRequest<Category[]>(buildUrl('categories'), init);
// };
export const getCategories = () => {
  const items = [];
  for (let i = 0; i < 8; i++) {
    items.push({
      id: i + 1,
      title: 'Costco Wholesale',
    });
  }
  return Promise.resolve(items);
};

// export const getCompanies = (init?: RequestInit) => {
//   return sendRequest<Company[]>(buildUrl('companies'), init);
// };
export const getCompanies = () => {
  const items = [];
  for (let i = 0; i < 8; i++) {
    items.push({
      id: i + 1,
      title: 'Canada',
      description: 'string',
      status: CompanyStatus,
      joinedDate: '02.11.2023',
      hasPromotion: true,
      categoryId: '12',
      categoryTitle: 'string',
      countryId: '12',
      countryTitle: 'string',
    });
  }
  return Promise.resolve(items);
};

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<Company>(buildUrl('companies', id), init);
};

export const getPromotions = async () => {
  const items = [];
  for (let i = 0; i < 7; i++) {
    items.push({
      id: i + 1,
      title: 'Costco',
      description: 'Lorem ipsum dolor',
      discount: 40,
      companyId: '12',
      companyTitle: 'Lorem ipsum dolor',
    });
  }

  return Promise.resolve(items);
};
// export const getPromotions = async (
//   params: Record<string, string> = {},
//   init?: RequestInit,
// ) => {
//   return sendRequest<Promotion[]>(
//     `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
//     init,
//   );
// };

export const createCompany = async (
  data: Omit<Company, 'id' | 'hasPromotions'>,
  init?: RequestInit,
) => {
  return sendRequest<Company>(buildUrl('companies'), {
    ...init,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};

export const createPromotion = async (
  data: Omit<Promotion, 'id'>,
  init?: RequestInit,
) => {
  return sendRequest<Promotion>(buildUrl('promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      'content-type': 'application/json',
    },
  });
};
