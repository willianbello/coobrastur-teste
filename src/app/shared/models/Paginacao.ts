import {Usuario} from "./Usuario";
import {Ad} from "./Ad";

export class Paginacao {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<Usuario>;
  ad = new Ad();
}
