function supplier(sno,sname,saddr){
  this.sno=sno;
  this.sname=sname;
  this.saddr=saddr;

  this.showDetails = function(){
    document.write("<BR>Showing details: ");
    document.write("<BR>cust name of "+this.sno+" : ",this.sname);
    document.write("<BR>cust address: ",this.saddr);
  }

}
