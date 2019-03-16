////////////////First task

var a = prompt("First Number");
var b = prompt("Second Number");

function chooseBigger(firstNum,secondNum){
if(firstNum > secondNum)
    {
        return firstNum;    
    }
else if (secondNum > firstNum)
    {
        return secondNum;
    }
else
    {
        return 'equal';
    }
}
  chooseBigger(a,b);

////////////////Second task

var Array = [12, 33, 65, 21, 5, 45, 89, 38, 87, 56];

function findMax(Array){
    var max = Array[0];
    for(i = 1,i <= Array.length-1,i++)
         {
        if(Array[i] > max)
            {
                max = Array[i];
            }
        else{         
                continue;
            }
  }
   return max;
}

function findMin(Array){
    var min = Array[0];
    for(i = 1,i <= Array.length-1,i++){
      if(Array[i] < min)
          {
           min = Array[i];
          }
      else{         
          continue;
          }
  }
   return min;
}
findMax();
findMin();

///////////// Third task
var Arr = [32,2,5,14,28,11,15];
var minVal = 2;
var maxVal = 32;

function filterArray (Arr,minVal,maxVal)
{
    var Arr2 = [];
    for(i=1, i<=Arr.length-1,i++)
        if (Arr[i] > minVal && Arr[i] < maxVal){
            Arr2 = Arr2.push(Arr[i]);
        }
    else{
        continue;
        }
    return Arr2; 
}
filterArray();
///////////// Fourth task

string text = "Hello, i am Max Deineka";

function wordsCounter(){
    var spaceCounter = 0;
    var words = 0;
    for(i=1, i<= text.length-1,i++){
        if(text[i] = " "){
            spaceCounter++;           
            }
        else{
            continue;
            }
     words = spaceCounter + 1; //в тексті слів завжди більше на 1, ніж пробілів 
     
    }
   return words;
}
alert(wordsCounter(text));


//////////// fifth task 

var a = 4;
var y = 10;

var calcu = {};

calcu.sum(a,y)
{
    return a+y;
}
calcu.substract(a,y)
{
    return a-y;
}
calcu.multiply(a,y)
{
    return a*y;
}
calcu.divide(a,y)
{
    return a/y;
}


function obj(a,b){
    var finish = x + calcu.substract(((calcu.multiply(x,5))),(calcu.divide(y,2)))
    return finish;
}

alert(obj(a,b));

//////////// sixth task 

var str = "HelLo MY my My nAmE iS MAX Max";
var arr = ["My","is"];
function Counter(str,arr){
    var objectsArray = [];
    var strLC = str.toLowerCase();
    var arrLC = arr.toLowerCase();
    var strLC_words = strLC.split(" ");
    for(i=1,i =< arrLC.length-1,i++){
        var object = [];
        var word = arrLC[i];
        var count = 0;
        for(j=1,j<=strLC_words - ,j++){          
            if(arrLC[i] === strLC_words[j]){
                count = count+1;
            }
            else{
                continue;
            }
        }
        object.name = word;
        object.count = count;
        objectsArray.push(objects);
    }
    return objectsArray;
}

//////////// seventh task 

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var objectsArray = [];
var num;
var TF;
function Pair(arr){
    for(i=1, i<= arr.length -1, i++)
        {
            var object = [];
            num = arr[i];
            if(arr[i] % 2 == 0)
               {
                return true;
               }
            else
               {
                return false;
               }
            object.num = num;
            object.TF = Pair(arr);
            objectsArray.push(objects);
        }
}





