/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controleAhgora;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.JTextField;


public class horaControle {

     public static void main(String[] args) throws ParseException{
        
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
               
        String horaInicial = "21:55";
        String horaFinal = "22:47";
        JTextField campo = new JTextField();
      
            Date horaIni = sdf.parse(horaInicial);
            Date horaFim = sdf.parse(horaFinal);
            
            long horaI = horaIni.getTime();
            long horaF = horaFim.getTime(); 
            
            if(horaI > horaF){
            System.out.println("erro");}else{
                
            long difMinutos = (long)( (horaFim.getTime() - horaIni.getTime()) 
                 / (60 * 1000));
            long difHoras = (long)( (horaFim.getTime() - horaIni.getTime()) 
                 / (60 * 60 * 1000));
             
           
            System.out.println(difHoras + "h " + difMinutos + "min.");

            
           
            //Date dateCadguia = datahora;
//Calendar dataInicial = Calendar.getInstance();
//dataInicial.setTime(dateCadguia);
//long diferenca = System.currentTimeMillis() - dataInicial.getTimeInMillis();
//long diferencaSeg = diferenca / 1000;    //DIFERENCA EM SEGUNDOS   
//long diferencaMin = diferenca / (60 * 1000);    //DIFERENCA EM MINUTOS   
//long diferencaHoras = diferenca / (60 * 60 * 1000);    // DIFERENCA EM HORAS   
//         
                
    }
    
    
}


    

