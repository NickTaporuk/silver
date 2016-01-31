var	figlet	=	require("figlet");
figlet.text("SILVER FMS!",	function(error,	data)	{
    if	(error)
        console.error(error);
    else
        console.log(data);
});