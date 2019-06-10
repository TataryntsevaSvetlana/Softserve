/*
Angular date formatter
Angular provides a filter to correctly display the dates.
For this kata, we will only take into consideration the date and the format ( and let the timezone aside )
Here is the official documentation about the filter
We simplify the possible representations to the following :
**yyyy** : 4 digit representation of a year,padded (1970-9999)
**yy** : 2 digit representation of a year, padded (00-99)
**MM** : Month in a year, padded (01-12)
**M** : Month in a year (1-12)
**dd** : Day in a month, padded (01-31)
**d** : Day in a month (1-13)
**HH** : Hour in a day, padded (00-23)
**H** : Hour in a day (0-23)
**mm** : Minute in hour, padded (00-59)
**m** : Minute in hour (0-59)
**ss** : Second in minute, padded (00-59)
**s** : Second in minute (0-59)
the function dateFilter should take two arguments : date and format.
date can be the Date object, a number, or a String (convertible in a number)
format is the format of the output. Here are some examples :
'HH:mm' // Can return something like '12:04'
'dd/MM/yyyy' // Can return something like '01/02/1995'
'd/M/yy H%m' // Can return something like '1/31/14 1%59'
Where there is an odd number of letters, parse the longest first then the remaining if needed. For example, yyyshoud be parsed as [yy]y, ddd should be parsed as [dd][d].
When there are more than 2 of MdHms, for example, dddd it should be parsed as [dd][dd].
Tests:
  let baseDate = new Date(0);
  let baseInt = 0;
  let baseStr= '0';

  var formats = {
     'HH:mm' :'00:00',
     'dd/MM/yyyy' : '01/01/1970',
     'd/M/yy H%m' : '1/1/70 0%0',
     'ss@mm == s@m' : '00@00 == 0@0'
  };

  for(var f in formats){
     Test.assertEquals(dateFilter(baseDate,f),formats[f]);
     Test.assertEquals(dateFilter(baseStr,f),formats[f]);
     Test.assertEquals(dateFilter(baseInt,f),formats[f]);
  }
*/


function dateFilter() {


    return ;
}

dateFilter([1, 3, 4, 6, 8], -2);



