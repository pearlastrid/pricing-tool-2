/* function calculatePrice extracts all of the user's inputs as detailed
in the HTML file. The formula used to calculate the listing price on the basis of 
profit (in dollars) earned is:
listing = ((profit + 0.45 + EtsyAdFee + itemCost + shippingCost) / (0.9182 - offsiteAd)) - shippingCharge
*/
function calculatePrice() {
    const offsiteAds = document.getElementById("offsiteAds");
    let offsiteAdsFee = parseFloat(offsiteAds.options[offsiteAds.selectedIndex].value);
    let numerator = parseFloat(document.getElementById("dollarsProfit").value) + 0.45 + 
                    parseFloat(document.getElementById("etsyAds").value) + 
                    parseFloat(document.getElementById("itemCost").value) + 
                    parseFloat(document.getElementById("shippingCost").value);
    let denominator = 0.9182 - offsiteAdsFee;
    let price = (numerator / denominator) - parseFloat(document.getElementById("shippingCharge").value);
    price = price.toFixed(2);
    document.getElementById("calculatedPrice").innerHTML = `$${price}`;
}