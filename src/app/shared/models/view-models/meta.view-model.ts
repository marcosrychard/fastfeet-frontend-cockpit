export class MetaViewModel {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  next: boolean;
  previous: boolean;

  constructor(data: MetaViewModel) {
    this.currentPage = data.currentPage;
    this.itemsPerPage = data.itemsPerPage;
    this.totalItems = data.totalItems;
    this.totalPages = data.totalPages;
    this.next = data.next;
    this.previous = data.previous;
  }
}
