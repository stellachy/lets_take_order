var customer = document.getElementById("customer");
var address = document.getElementById("address");
    var county = document.getElementById("county");
    var village = document.getElementById("village");
    var others = document.getElementById("others");
var content = document.getElementById("content");
    var productType = document.getElementById("productType");
    var productPrice = document.getElementById("productPrice");
    var productAmount = document.getElementById("productAmount");
var shipping = document.getElementById("shipping");
    var shippingMethod = document.getElementById("shippingMethod");
    var shippingCost = document.getElementById("shippingCost");
var time = document.getElementById("time");
    var timeYear = document.getElementById("timeYear");
    var timeMonth = document.getElementById("timeMonth");
    var timeDate = document.getElementById("timeDate");
var btn = document.getElementById("btn");
var result = document.getElementById("result");

btn.addEventListener("click", function(){
    result.innerHTML = result.innerHTML + 
    `<div class="order-result">
        <h2>
            顧客姓名 | ${customer.value}
        </h2>
        <h3>
            運送地址 | ${county.value} ${village.value} ${others.value} 
        </h3>
        <hr/>
        <h3>
            訂單內容 | 
                <p>
                ${productType.value} - 單價 ${productPrice.value} * 數量 ${productAmount.value} = ${productPrice.value*productAmount.value}
                <p/>
        <h3/>
        <br/>
        <h3>
            運送方式與費用 | ${shippingMethod.value} ${shippingCost.value} 
        <h3/>
        <hr/>
        <h2>
            總計 | ${Number(productPrice.value*productAmount.value)+Number(shippingCost.value)}
        <h2/>
        <h3>
        預計收貨日期 | 民國 ${timeYear.value} 年 ${timeMonth.value} 月 ${timeDate.value} 日 
        <h3/>
    </div>`;
    customer.value="";
    county.value="";
    others.value="";
    productType.value="";
    productPrice.value="";
    productAmount.value="";
    shippingMethod.value="";
    shippingCost.value="";
    timeYear.value="";
    timeMonth.value="";
    timeDate.value="";
}
);