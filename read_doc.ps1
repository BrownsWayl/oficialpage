try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open("D:\Node_Project\demo3\public\ch.doc", $false, $true)
    $text = $doc.Content.Text
    $doc.Close()
    $word.Quit()
    $text | Out-File -FilePath "D:\Node_Project\demo3\public\ch_content.txt" -Encoding utf8
    Write-Output "Successfully read doc and wrote to ch_content.txt"
} catch {
    Write-Output "Error: $_"
}
