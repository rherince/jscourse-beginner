var list = [
{ label : 'Item 1' },
{
  label : 'Item 2',
  list : {
    '1' : { label : 'Sub Item 2.1' },
    '2' : { label : 'Sub Item 2.2' },
    '3' : { label : 'Sub Item 2.3' }
  }
},
{
  label : 'Item 3',
  list : [
  {
    label : 'Sub Item 3.1',
    list : {
      '1' : { label : 'Sub Item 3.1.1' },
      '2' : { label : 'Sub Item 3.1.2' }
    }
  },
  { label : 'Sub Item 3.2' },
  { label : 'Sub Item 3.3' }
  ]
}
];

function printList( list, size ) {
  var tag = list.constructor === Array ? 'ol' : 'ul';
  var html.push(['<', tag, ' style="font-size:', size - 2, 'px">'].join(''));
  for ( var name in list ) {
    if ( ! list.hasOwnProperty( name ) ) {
      continue;
    }
    html.push(['<li style="font-size:', size, 'px">', list[name].label].join(''));
    if ( list[name].list ) {
      if ( size > 8 ) {
        html.push(printList( list[name].list, size - 2 ));
      } else {
        html.push(printList( list[name].list, size ));
      }
    }
    html.push('</li>');
  }
  html.push(['</', tag, '>'].join(''));
  return html.join('');
}

var size = 16;
document.getElementById('result').innerHTML = printList(list, size);
