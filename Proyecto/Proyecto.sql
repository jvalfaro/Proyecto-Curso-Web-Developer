use master; 
IF EXISTS(SELECT * FROM SYSDATABASES WHERE NAME = 'ProductosDB')
    BEGIN
             DROP DATABASE ProductosDB
    END
	
create database ProductosDB; 
go
use ProductosDB; 

create table  Productos 
(
	Id int primary key identity(1,1),  
	Title nvarchar(512), 
	Description nvarchar(2056),
	Marca nvarchar(500)
)
go 
create table Reviews 
(
	Id int primary key identity(1,1),  
	Comment nvarchar(2056), 
	SKU int , 
	IDProducto int references  Productos(Id)
)
go 
create procedure usp_Productos_count
as 
select count(*)  from Productos 
go
create procedure usp_Productos_get
as 
select *  from Productos 
go
create procedure usp_Productos_get_one
@Id int
as 
select *  from Productos where Id = @Id


