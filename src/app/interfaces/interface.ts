interface IBranchProduct {
  specialOffer: any;
  id: string;
  retailPrice: number;
  retailPriceWithTax: number;
  unitPrice: number;
  surcharge: number;
  surchargeWithTax: number;
  taxPrice: number;
  status: string;
  branch_Id: number;
  siteCode: string;
  coreProduct: boolean;
}

interface IBrand {
  name: string;
  logoUrl: string;
}

interface IType {
  name: string;
  description: string;
}

export interface IProduct {
  url: string;
  webProductGuid: string;
  partNumber: string;
  title: string;
  description: string | null;
  applicationList: string;
  groupedApplicationList: string;
  imageUrl: string;
  hasAlternatives: boolean;
  branchProducts: IBranchProduct[];
  supersession: any[];
  brand: IBrand | null;
  type: IType | null;
  recommendedPart: boolean | null;
  marketingNotes?: any | null;
  nodeInfo?: any[];
  quantity?:number;
}
