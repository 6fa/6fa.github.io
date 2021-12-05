
const uploaderTemp = `
    <div class="title">
      <span>vue-img-uploader</span>
      <a href="https://github.com/6fa" class="amplify">https://github.com/6fa</a>
    </div>
    <div class="img-list">
      <div class="img-list-item">
        <img src="./uploader/images/卡片预览+卡片选择.png">
        <span class="img-list-item-info">卡片预览+卡片选择(悬停显示放大和删除按钮)</span>
      </div>
      <div class="img-list-item">
        <img src="./uploader/images/卡片预览+拖拽选择.png">
        <span class="img-list-item-info">卡片预览+拖拽选择</span>
      </div>
      <div class="img-list-item">
        <img src="./uploader/images/列表预览+卡片选择.png">
        <span class="img-list-item-info">列表预览+卡片选择</span>
      </div>
      <div class="img-list-item">
        <img src="./uploader/images/列表预览+拖拽选择.png">
        <span class="img-list-item-info">列表预览+拖拽选择</span>
      </div>
      <div class="img-list-item">
        <img src="./uploader/images/卡片图片过大.png">
        <span class="img-list-item-info">卡片图片过大</span>
      </div>
      <div class="img-list-item">
        <img src="./uploader/images/卡片图片过大删除按钮.png">
        <span class="img-list-item-info">悬停显示删除按钮</span>
      </div>
      <div class="img-list-item">
        <img src="./uploader/images/列表图片过大.png">
        <span class="img-list-item-info">列表图片过大</span>
      </div>
      <div class="img-list-item">
        <img src="./uploader/images/上传中.png">
        <span class="img-list-item-info">上传中</span>
      </div>
  </div>
`

const snacksTemp = `  
snacks
`

const accountBookTemp = `
accountBook
`

const tempList = [uploaderTemp, snacksTemp, accountBookTemp]

function getTemp (type) {
  return tempList[type]
}
