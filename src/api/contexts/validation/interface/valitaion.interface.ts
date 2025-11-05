export interface IValitionService {
  validateDocument: (document: string) => Promise<boolean>;
}
