const createAppSchemaJumpFn = (params) => {
  const { pname, action, iosMarketUrl, androidMarketUrl } = params

  let isIos = false
  let isAndroid = false

  //  #ifdef APP-PLUS
  isIos = plus.os.name == 'iOS'
  isAndroid = plus.os.name == 'Android'
  //  #endif

  return ({ schema }) => {
    if (isAndroid) {
      if (plus.runtime.isApplicationExist(pname, action)) {
        const mContext = plus.android.runtimeMainActivity()
        const Uri = plus.android.importClass('android.net.Uri')
        const Intent = plus.android.importClass('android.content.Intent') // native intent
        const intent = new Intent(Intent.ACTION_VIEW, Uri.parse(schema))
        mContext.startActivity(intent)
      } else {
        plus.runtime.openURL(androidMarketUrl)
      }
    }

    if (isIos) {
      plus.runtime.launchApplication({ action: schema }, function () {
        plus.runtime.openURL(iosMarketUrl) // fail callback
      })
    }
  }
}

export const otherAppSchemaJump = createAppSchemaJumpFn({
  pname: 'com.other',
  action: 'other://',
  iosMarketUrl: 'itms-apps://itunes.apple.com/cn/app/idxxx',
  androidMarketUrl: 'https://ohter.com/#/download'
})

const createAppSchemaJumpFn1 = (params) => {
  const { pname, action, iosMarketUrl, androidMarketUrl } = params

  let isIos = false
  let isAndroid = false

  //  #ifdef APP-PLUS
  isIos = plus.os.name == 'iOS'
  isAndroid = plus.os.name == 'Android'
  //  #endif

  return ({ schema, extra }) => {
    const isExistOtherApp = plus.runtime.isApplicationExist(pname, action)
    if (!isExistOtherApp) {
      plus.runtime.openURL(isIos ? iosMarketUrl : androidMarketUrl)
      return
    }

    if (isAndroid) {
      plus.runtime.launchApplication({ pname, extra })
    }

    if (isIos) {
      plus.runtime.launchApplication({ action: schema })
    }
  }
}
