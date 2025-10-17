
export default function PageLayout({header,footer,children}){

  return (
     <div>
       <h1>{header}</h1>
      <p>{children}</p>
      <p>{footer}</p>
    </div>
  )
}
