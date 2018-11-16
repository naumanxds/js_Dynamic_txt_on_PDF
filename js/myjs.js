$('document').ready(function() {

	$('.cheque_From').keyup(function () {
		$('.chequeFrom').html($(this).val());
	});

	$('.cheque_AmountTxt').keyup(function () {
		$('.chequeAmountTxt').html($(this).val());
	});

	$('.cheque_AmountNum').keyup(function () {
		$('.chequeAmountNum').html($(this).val());
	});

	$('.cheque_Puropse').keyup(function () {
		$('.chequePurpose').html($(this).val());
	});

	$('.chequeExport').click(function() {
		$.get('compressedImg/cheque.txt', function(chequeImg) {
			var doc = new jsPDF();
			doc.addImage(chequeImg, 'JPG', 0, 0, 210, 100);
			doc.setTextColor('#689172');
			doc.text(41, 50, $('.cheque_From').val());
			doc.text(41, 63, $('.cheque_AmountTxt').val());
			doc.text(143, 63, $('.cheque_AmountNum').val());
			doc.text(41, 76, $('.cheque_Puropse').val());
			doc.output('save', 'cheque.pdf');
		}, 'text');
	});

	$('.education_To').keyup(function () {
		$('.educationTo').html($(this).val());
	});

	$('.education_Of').keyup(function () {
		$('.educationOf').html($(this).val());
	});

	$('.educationExport').click(function() {
		$.get('compressedImg/education.txt', function(educationImg) {
			var doc = new jsPDF();

			var textWidth = doc.getStringUnitWidth($('.education_To').val()) * doc.internal.getFontSize() / doc.internal.scaleFactor;
		    var offsetTO = (doc.internal.pageSize.width - textWidth) / 2;

		    var textWidth = doc.getStringUnitWidth($('.education_Of').val()) * doc.internal.getFontSize() / doc.internal.scaleFactor;
		    var offsetOf = (doc.internal.pageSize.width - textWidth) / 2;

			doc.addImage(educationImg, 'JPG', 0, 0, 210, 160);
			doc.setTextColor('#212024');
			doc.text(offsetTO, 55, $('.education_To').val());
			doc.text(offsetOf, 76, $('.education_Of').val());
			doc.output('save', 'education.pdf');
		}, 'text');
	});

	$('.health_To').keyup(function () {
		$('.healthTo').html($(this).val());
	});

	$('.healthExport').click(function() {
		$.get('compressedImg/health.txt', function(healthImg) {
			var doc = new jsPDF();
			doc.addImage(healthImg, 'JPG', 0, 0, 210, 291);
			doc.setTextColor('#303030');
			doc.text(26, 100, $('.health_To').val());
			doc.output('save', 'health.pdf');
		}, 'text');
	});

});