(function() {
function getASIN() {
   	try {
 		var asinFields = document.querySelectorAll("[name^=ASIN]");
 		var asin = asinFields[0].value;
	}
	catch(e)
  {
    console.log("GoodreadsForAmazon: ASIN not found");
    return false;
  }
  return asin;
}

var asin = getASIN();
if (asin !== false)
{
	var goodreadsUrl = "https://www.goodreads.com/book/isbn?isbn=" + asin;
	window.open(goodreadsUrl,'_blank');
}
});

