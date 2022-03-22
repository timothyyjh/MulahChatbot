function showChat() {
	div = document.getElementById('openchat');
	div.style.display = 'block';
}

function closeOpenChat() {
	div = document.getElementById('openchat');
	div.style.display = ('none');
}

// BOT REPLIES
function botReply() {
	let div = document.getElementById('userinput');

	div.addEventListener('keydown', function(event){
		if (event.key === 'Enter'){
			
			let div = document.getElementById('userinput').value;

			if (div.includes('?'))		
			{
				div = document.getElementById('botreplyquestion');
				div.style.display = ('block');
			} 	
			else if (div.includes('!'))		
			{
				div = document.getElementById('botreplyyell');
				div.style.display = ('block');
			}
			else if (div.includes('?!'))		
			{
				div = document.getElementById('botreplyquestionyell');
				div.style.display = ('block');
			}
			else if (div.includes('Bob'))		
			{
				div = document.getElementById('botreplyaddress');
				div.style.display = ('block');
			}
			else		
			{
				div = document.getElementById('botreplywhatever');
				div.style.display = ('block');
			}
		}
	})
}