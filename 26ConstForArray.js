// use const for creating array

const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);

// const array mein "banana" push hogaya qki const jo hai stack memory mein store hai jaha sirf address store hai toh array jo heap memory mein store hai waha agar hum kch v push pop krte hai toh usse koi frq nai pdta hai
// lekin agar address change krenge mtlb naya array bnayenge toh error show hoga
// fruits = ["orange","grape"];
// 90% developer array bnanae ke liye const ka h use krte hai ya reference data type bnane ke liye
// qki array jo bn gaya wo bn gaya usme hum push pop jo krna hai krenge fir se array assign nai krenge