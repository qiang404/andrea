<template>
  <div class="mustBuy">
    <div class="top">
        <div class="left">
          <i class="iconfont icon-gouwuche"></i>
          <p>必买专区</p>
        </div>
        <div class="right">
          <p>更多</p>
          <i class="iconfont icon-iconfontjiantou5"></i>
        </div>
    </div>
    <div class="bottom">
      <div class="left">
        <img src="@/assets/img/popular.png" alt="">
        <div class="text">
          <p>人气推荐</p>
          <p>小蛋糕</p>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/img/today.png" alt="">
        <div class="text">
          <p>今日推荐</p>
          <p>小蛋糕</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MustBuy'

}

</script>
<style lang="less" scoped>
.mustBuy{
  width: 704px;
  margin: 0 auto;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      align-items: center;
      i{
        font-size: 34px;
        margin-right: 18px;
      }
      p{
        color: #111010;
        font-size: 26px;
        font-weight: bold;
      }
    }
    .right{
      display: flex;
      align-items: center;
      i{
        font-size: 20px;
        margin-left: 11px;
      }
      p{
        color: #454545;
        font-size: 20px;
      }
    }
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 19px;
    .left{
      width: 316px;
      height: 145px;
      background-color: #7b4f46;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img{
        width: 85px;
	      height: 108px;
      }
    }
    .right{
      width: 316px;
      height: 145px;
      background-color: #d87a6e;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img{
        width: 84px;
	      height: 120px;
      }
    }
    .text{
      display: flex;
      flex-direction: column;
      color: white;
      p{
        flex: 1;
        text-align: right;
        &+p{
          margin-top: 19px;
        }
      }
    }
  }
}
</style>