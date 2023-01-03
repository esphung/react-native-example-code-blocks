// SCROLLABLE COMPONENT (IN BOTTOM SHEET)
import React, {Component} from 'react';
import {TouchableWithoutFeedback, ScrollView, TouchableOpacity, AppRegistry, StyleSheet, Text, View} from 'react-native';

const DATA = [
    {
        "id": 1,
        "thryv_id": "vvk53mythh870vks",
        "payment_status": "CANCELLED",
        "payment_request_id": 0,
        "charge_date": "2020-11-06T00:00:00.000Z",
        "fk_payrix_merchant_id": "t1_mer_5f89ae16ccd6da5176bf077",
        "payrix_token": "939bab6ac16690ce3786e4a70d07943c",
        "payrix_type": 1,
        "payrix_origin": 2,
        "payrix_total": 30,
        "date_created": "2020-10-26T00:18:24.000Z",
        "date_last_updated": "2020-10-26T00:20:10.000Z",
        "payrix_status": 0,
        "scheduled_payments_id": 1,
        "currency": "USD",
        "payrix_transaction_id": "-1",
        "payrix_batch": "",
        "first_txn": ""
    },
]

const ROW_HEIGHT = 72;

export default function FoldingTransactionListItem({ item }) {
  const [currentHeight, setCurrentHeight] = React.useState(ROW_HEIGHT);

    return (
        <TouchableOpacity
          onPress={() => {
            if (currentHeight === ROW_HEIGHT) {
              setCurrentHeight(ROW_HEIGHT * 3)
            } else setCurrentHeight(ROW_HEIGHT);
          }}
          style={{
            width: '100%',
            height: currentHeight,
            backgroundColor: 'red',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
          <Text
            style={{
              height: ROW_HEIGHT,
              paddingVertical: ROW_HEIGHT * 0.4,
              paddingLeft: ROW_HEIGHT * 0.25,
            }}
          >
            { item.charge_date }
          </Text>
          <Text
            style={{
              height: ROW_HEIGHT,
              paddingVertical: ROW_HEIGHT * 0.4,
              paddingRight: ROW_HEIGHT * 0.25,
            }}
          >
            { item.payrix_total }
          </Text>
          </View>
          
          
          {
            // THE CHILD IS SCROLLABLE HERE
            currentHeight > ROW_HEIGHT &&
            <TouchableWithoutFeedback
              // onPress={...}
            >
            <ScrollView
              contentContainerStyle={{
                flex: 1,
              }}
            >
              <View
                onStartShouldSetResponder={
                  () => true
                }
              >
                <Text
                  style={{
                    height: ROW_HEIGHT,
                    margin: ROW_HEIGHT * 0.4,
                  }}
                >
                {
                  JSON.stringify(item, null, 2)
                }
                </Text>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
          }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});

function MyApp() {
  return <View
    style={styles.container}>
      <FoldingTransactionListItem
        item={DATA[0]}
      />
    </View>
}


// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'FoldingTxnList', () => MyApp
);
