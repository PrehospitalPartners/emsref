$(document).ready(function() {
  $('#citations-table').DataTable({
      'ajax': {
          'url': 'data/data2.json',
          'success': function(data) {
              console.log('Data received:', data);
              var table = $('#citations-table').DataTable();
              table.clear().rows.add(data).draw();
          },
          'error': function(xhr, status, error) {
              console.error('AJAX Error:', status, error);
          }
      },
      'columns': [
          { 'data': 'Year' },
          { 'data': 'Title' },
          { 'data': 'Author' },
          { 'data': 'Journal'},
          { 
            'data': 'Url',
            'render': function(data, type, row) {
                if (type === 'display') {
                    return '<a href="' + data + '" target="_blank" class="btn btn-primary">Go to Paper</a>';
                }
                return data;
            }
        }]
  });
});