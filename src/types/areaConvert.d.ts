  // Convert the land metric
  export type Units = "sq.meter" | "sq.feet" | "sq.km" | "sq.yard" | "sq.mile" | "acre" | "hectare" | "bigha" | "kattha" | "dhur" | "ropani" | "aana" | "paisa" | "daam" | "khetmuri" | "matomuri";
  // | "ro-aa-pa-da" | "bi-ka-dh" | "kh-ma"
  

  export type ConversionResult = {
    [value in Units]? : number;
  }