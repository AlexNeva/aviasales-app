export default class TicketsService {


  API_BASE = 'https://front-test.beta.aviasales.ru/'


  async getResource(url) {

    const res = await fetch(`${this.API_BASE}${url}`);

    if (!res.ok) {
      throw new Error('error')
    }

    return res.json();
  }

  getSearchId() {
    return this.getResource(`search`)
  }

  getTickets(id) {

    return this.getResource(`tickets?searchId=${id}`)
  }

}