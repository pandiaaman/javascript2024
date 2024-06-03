//callbacks are the functions that are passed insdie other functions

//issues with callbacks: callback hell and inversion of control

{
  //

  function getApiData(data) {
    console.log("received... " + data);
  }

  function getData() {
    setTimeout(() => {
      getApiData(111);
      setTimeout(() => {
        getApiData(222);
      }, 5000);
    }, 3000);
  }

  getData();
}

//callback hell: code starts to grow horizontally instead of vertically
{
  //ex. say there is a e commerce website, here we want that once cart is ready we make order ready
  //then only we go to payment page and after that only we go to order summary page

  const cart = ["apple", "banana"];

  api.prepareOrder(cart, function () {
    api.paymentPage(function () {
      api.ordersummary();
    });
  });

  //THIS structure is called PYRAMID OF DOOM
}

//inversion of control
//loosing control of the code while using callbacks
/*
    in the above example the control of calling paymentpage is in hands of prepareOrder, if it fails, everything fails
    we are very dependent of prepareOrder
*/
