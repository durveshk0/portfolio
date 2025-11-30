# PowerShell script to convert DOCX to PDF using Word COM object
$word = New-Object -ComObject Word.Application
$word.Visible = $false

try {
    $doc = $word.Documents.Open("$PWD\resum.docx")
    $pdfPath = "$PWD\public\resume.pdf"
    
    # Export as PDF (format 17 = PDF)
    $doc.SaveAs([ref]$pdfPath, [ref]17)
    
    $doc.Close()
    $word.Quit()
    
    Write-Host "Successfully converted resum.docx to resume.pdf" -ForegroundColor Green
    Write-Host "PDF saved to: $pdfPath" -ForegroundColor Green
} catch {
    Write-Host "Error converting file: $_" -ForegroundColor Red
    $word.Quit()
}

