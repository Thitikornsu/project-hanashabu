"use client"
import Admintemplate from "@/components/Admintemplate"
import { Button } from "@/components/ui/button"
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Modalreceipt from "@/components/Modalreceipt";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

 
const products = [
  {
    id:"1",
    name: "เนื้อออสเตรเลีย",
    amount: "70",
    unit: "KG",
    emp: "Thitikorn",
    status: "ปกติ",
    dateupdate: "20-11-2025 18:00",
    note:"",
  },
  {
    id:"2",
    name: "เนื้อไก่",
    amount: "50",
    unit: "KG",
    emp: "Thitikorn",
    status: "เหลือน้อย",
    dateupdate: "20-11-2025 18:00",
    note:"",
  },
]


function Stockout() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };




  return (
    <>
    <Admintemplate>
    <div className='size-full p-10  flex items-center justify-center '>
      <div className='bg-white size-full  rounded-3xl'>
      
        <div className=" mt-5 w-full h-[70px] px-6 flex items-center">
          <p className="text-3xl">ประวัติการนำเข้าสินค้า</p>

        </div>

        <div className="w-full h-[70px]  flex items-center justify-center">
          <div className="relative w-full px-6 ">
                  <form action="" className=" flex items-center justify-start">
                  <input
                    type="text"
                    placeholder="ค้นหาสินค้า..."
                    className="pl-10 pr-4 mr-5 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB8DA] w-[30%]"
                  />
                  <RiSearchLine className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Button type="submit" className="py-5 bg-[#FFB8DA] hover:bg-[#fcc6e0]">ค้นหา</Button>
                  </form>
                </div>
        </div>
        
        <div className="mt-2 w-full px-6">
          <div className="border rounded-md  min-w-[800px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[75px] text-center">รหัสนำเข้า</TableHead>
                  <TableHead className="w-[100px] md:w-[200px]">ชื่อสินค้า</TableHead>
                  <TableHead className="w-[75px] text-right">จำนวน</TableHead>
                  <TableHead className="w-[75px] text-right">หน่วย</TableHead>
                  <TableHead className="w-[150px] ">พนักงาน</TableHead>
                  <TableHead className="w-[100px] text-right">วันที่ทำรายการ</TableHead>
                  <TableHead className="w-[125px] text-right">หมายเหตุ</TableHead>
                  <TableHead className="w-[100px] text-center">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium text-center">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell className="text-right">{product.amount}</TableCell>
                    <TableCell className="text-right">{product.unit}</TableCell>
                    <TableCell className="">{product.emp}</TableCell>
                    <TableCell className="text-right">{product.dateupdate}</TableCell>
                    <TableCell className="text-center"> {product.note}</TableCell>
                    <TableCell className="text-center flex justify-center items-center">
                      
                      <Button className="bg-[#FFB8DA] hover:bg-[#fcc6e0] mr-2" onClick={handleOpenModal}><MdOutlineRemoveRedEye/> ดูรายละเอียด</Button>
                      <Button variant="destructive">ลบ</Button>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>


        {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Modalreceipt
                  receiptNumber= {products[0].id}
                  date={products[0].dateupdate}
                  staffName={products[0].emp}
                  items={[
                    {
                      name: "เนื้อออสเตรเลีย",
                      quantity: 30,
                      unit: "KG",
                      pricePerUnit: 80,
                      totalPrice: 2400,
                    },
                    {
                      name: "เนื้อออสเตรเลีย",
                      quantity: 30,
                      unit: "KG",
                      pricePerUnit: 80,
                      totalPrice: 2400,
                    },
                  ]}
                  totalAmount={4800}
                  closemodal={handleCloseModal}/>
              </div>
            )}

      </div>
    </div>
    </Admintemplate>
    </>
  )
}
export default Stockout