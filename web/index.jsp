<%-- 
    Document   : index
    Created on : 10/04/2021, 19:48:59
    Author     : Leo
--%>
<!--index.jsp ahgor-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Exemplo Ahgora</title>
    </head>
    <body>
        <h1>Ahgora</h1>
        
        <form id="form_teste" method="post" action="auto_servlet?cmd=salvar">
            <label>Tipo: </label>
            <input name="tipo" type="text"/> <br /> <br />
           <label>Modelo: </label>
            <input name="modelo" type="text"/> <br /> <br />
            <label>Fabricante: </label>
            <input name="fabricante" type="text"/> <br /> <br />
            <label>Valor: </label>
            <input name="valor" type="number"/> <br /> <br />
            
            <input type="submit" value="Salvar"/>
            <input type="submit" value="Limpar"/>
            
        </form>
        
        
    </body>
</html>