/*
 *   Autor=Miguel Escolar Ituarte
 *   Fecha= 12 de feb. de 2017
 *   Licencia=GPL v3 
 *   Version=1.0
 *   Descripcion=
*/

/* 
 * Copyright (C) 2017 Miguel Escolar Ituarte
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function FormSubmit(){
	if (document.getElementById("nombre").checkValidity() &&
			document.getElementById("apellido1").checkValidity() &&
			document.getElementById("apellido2").checkValidity() &&
			document.getElementById("email").checkValidity() &&
			document.getElementById("telefonoF").checkValidity() &&
			document.getElementById("telefonoM").checkValidity() &&
			document.getElementById("descripcion").checkValidity() &&
			document.getElementById("terminos").checkValidity() &&
			document.getElementById("asunto").checkValidity()
			)
		return true;
	else
		return false;
}
function habilitar(){
var req=document.getElementsByName("required");
var aux=0;
for (var i=0;i<req.length;i++){
    if (req[i].value.length>1){
        aux++;
    }
}
if(aux==req.length)
		document.getElementById("terminos").removeAttribute("disabled");
}
function deshabilitar(){
	document.getElementById("terminos").setAttribute("disabled","true");
}