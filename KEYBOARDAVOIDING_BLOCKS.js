

// WORKING FOR LOGIN KEYBOARD PUSH

    <ScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
        	flex: 1,
        }}
      >

      // WORKING FOR NOT AVOIDING WITH SAME SAME DIMENSIONS AFTER NAVIGATION

    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
        // backgroundColor: 'papayawhip',
      }}
    >

       <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? null : "height"}
        enabled={false}
        style={{
        	flex: 1,
        }}
      >