export  class MockActivatedRoute {
  snapshot = { params: { id: '' } };

  setParameter(arg: string) {
    this.snapshot.params.id = arg;
  }
}
