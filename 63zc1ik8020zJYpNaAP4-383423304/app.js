(function (window, document) {
  const widget_ids = ['4f3294d6-c683-4d6e-9ab6-b64ab9ee2d8e', '7ebf8e61-10fa-4805-9fc5-535153702006', '1c58139f-1dd9-43a0-8210-0de8c357b84b', 'ad52cfc0-2f5b-42ff-acc5-2a9e072696e6', '83387478-637c-490e-b71d-5fd7535079e7', '6aa5085b-cee1-4290-a080-f1fb31bcc604', 'b5e8314d-edc3-4613-a5ea-8ec3870bc243', '9c935234-3234-41be-b407-ba335abff27b'];
  const img_urls = ['https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=4f3294d6-c683-4d6e-9ab6-b64ab9ee2d8e&slot=1', 'https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=7ebf8e61-10fa-4805-9fc5-535153702006&slot=2', 'https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=1c58139f-1dd9-43a0-8210-0de8c357b84b&slot=3', 'https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=ad52cfc0-2f5b-42ff-acc5-2a9e072696e6&slot=4', 'https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=83387478-637c-490e-b71d-5fd7535079e7&slot=5', 'https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=6aa5085b-cee1-4290-a080-f1fb31bcc604&slot=6', 'https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=b5e8314d-edc3-4613-a5ea-8ec3870bc243&slot=7', 'https://imgad.strossle.com/img?uid=13194379&nid=13…4&pid=9c935234-3234-41be-b407-ba335abff27b&slot=8']

  let container = document.getElementsByClassName('newsletter')[0];

  img_urls.forEach((iu) => injectPicassoIntegration(iu, container));

  function injectPicassoIntegration (img_url, parent_element) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.appendChild(img);
    img.src = img_url;
    div.appendChild(a);

    div.className = 'integration';

    parent_element.appendChild(div);

    return parent_element.children[parent_element.children.length - 1];
  }
}(window, window.document));
