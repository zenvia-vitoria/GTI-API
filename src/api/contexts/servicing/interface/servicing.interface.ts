export type IServicingServiceFindByID = {
  uf: string;
  id: string;
};
export interface IServicingService {
  findByUF: (uf: string) => string;
  findByID: ({ uf, id }: IServicingServiceFindByID) => string;
}
