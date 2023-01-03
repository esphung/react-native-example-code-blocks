
class PaymentRequestDisplay extends React.Component {
  getSubtotal = (arr) => {
      const amounts = arr.map(
        (item) => Number(item.price));
          let subtotal = 0;
            amounts.forEach((value) => {
              subtotal += value;
            });
          return subtotal.toFixed(2);
  };
  getTaxes = (arr) => {
      const values = arr.map(
        (item) => Number(item.tax));
      let total = 0;
      values.forEach(
        (value) => { total += value; });
      return total.toFixed(2);
  };
  getTotal = (arr) => {
      // count amount from each service
      const values = arr.map((item) => Number(item.price));
      let subtotal = 0;
      values.forEach((value) => { subtotal += value; });
      // count taxes from each service
      let taxes = 0;
      arr.forEach(
        (item) => {
          taxes += Number(item.tax);
      });
      const total = subtotal + taxes;
      return total.toFixed(2);
    };
  
  render() {
    const view = (
      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          Payment Request ID:
          {' '}
          {this.props.data.id}
        </div>
        <div
          style={{
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          Thryv Business ID:
          {' '}
          {this.props.data.thryv_id}
        </div>
        <hr />
        {
          this.props.data.items.map(
            (item, index) => {
              const listItem = (
                <div
                  style={{
                    flex: 1,
                    backgroundColor: (index % 2 === 0) ? 'beige' : 'lightgray',
                  }}
                >
                  <div
                    style={{
                      margin: 8,
                      padding: 12,
                    }}
                  >
                    <div>
                      Name:
                      {' '}

                      {item.name}
                    </div>
                    <div>
                      Tax:
                      {' '}
                      ${item.tax}
                    </div>
                  
                    <div>
                      Price:
                      {' '}
                      ${item.price}
                    </div>
                  </div>

                </div>
              );
              return listItem;
            })
        }
        <hr />
          <div
            style={{
              flex: 1,
              backgroundColor: 'skyblue',
            }}
          >
            <div
              style={{
                margin: 8,
              }}
            >
              <div
                style={{
                  padding: 12,
                }}
              >
                Subtotal:
                {' '}
                ${this.getSubtotal(this.props.data.items)}
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: 'lightblue',
            }}
          >
            <div
              style={{
                margin: 8,
              }}
            >
              <div
                style={{
                  padding: 12,
                }}
              >
                Taxes:
                {' '}
                ${this.getTaxes(this.props.data.items)}
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: 'steelblue',
            }}
          >
            <div
              style={{
                margin: 8,
              }}
            >
              <div
                style={{
                  padding: 12,
                }}
              >
                Total:
                {' '}
                ${this.getTotal(this.props.data.items)}
              </div>
            </div>
          </div>

        <div
          style={{
            flex: 1,
            margin: 8,
            padding: 12,
          }}
        >
        </div>

        <div
          style={{
            flex: 1,
            margin: 8,
            padding: 12,
          }}
        >
        <a
          href="exp://exp.host/@thryvdeveloper/thryvpay-mobile-app"
        >
          Open in the App
        </a>
        </div>
      </div>
    );
    return view;
  }
}

const payment_request_from_eric = {
  "id": "123456789",
  "thryv_id": "987654321",
  "items": [
    {
      "price": "234.75",
      "name": "Weed wacking",
      "tax": "26.54"
    },
    {
      "price": "579.67",
      "name": "Roofing",
      "tax": "36.76"
    },
    {
      "price": "1066.50",
      "name": "Car Detail",
      "tax": "100.54"
    },
    {
      "price": "105.68",
      "name": "Lego Set",
      "tax": "36.76"
    }
  ]
};

ReactDOM.render(
  <PaymentRequestDisplay
    data={payment_request_from_eric}
  />,
  document.getElementById('app')
);