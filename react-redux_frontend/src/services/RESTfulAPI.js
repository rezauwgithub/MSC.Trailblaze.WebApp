/*
  Services are stateless.
  They act as utility facades that abstract the details for complex operations.
  Normally, our interface to any sort of server API will be as a service.
*/

class RESTfulAPIService {

  async getJSONData(url) {
    
    const response = await fetch(url, {
      method: 'GET',
       headers: {
         'Accept': 'application/json',
       }
    });

    if (!response.ok) {
      throw new Error(`RESTfulAPIService getJSONData failed - HTTP status ${response.status}`);
    }

    const data = await response.json();
    console.log('We get the data: ' + JSON.stringify(data));
    return data;
  }


  async postJSONData(url, jsonData) {
    
    const response = await fetch(url, {
      method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: JSON.stringify({
          jsonData: jsonData
        })
    });

    if (!response.ok) {
      throw new Error(`RESTfulAPIService postJSONData failed - HTTP status ${response.status}`);
    }

    const data = await response.json();
    console.log('We get the data: ' + JSON.stringify(data));
    return data;
  }


  
  _validateUrl(url = '') {
    return url.startsWith('http') ? url : undefined;
  }

}


export default new RESTfulAPIService();