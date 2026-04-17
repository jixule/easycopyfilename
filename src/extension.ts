import * as vscode from 'vscode'
import * as path from 'path'

export function activate(context: vscode.ExtensionContext) {
  // 复制文件名（不含后缀）
  let disposableWithoutExt = vscode.commands.registerCommand('copyFileName.copyWithoutExt', (uri: vscode.Uri) => {
    const filePath = uri?.fsPath
    if (!filePath) {
      return
    }
    const fileNameWithoutExt = path.parse(filePath).name
    vscode.env.clipboard.writeText(fileNameWithoutExt)
    vscode.window.setStatusBarMessage(`✅ 已复制文件名: ${fileNameWithoutExt}`, 2000)
  })

  // 复制文件名（含后缀）
  let disposableWithExt = vscode.commands.registerCommand('copyFileName.copyWithExt', (uri: vscode.Uri) => {
    const filePath = uri?.fsPath
    if (!filePath) {
      return
    }
    const fileNameWithExt = path.basename(filePath)
    vscode.env.clipboard.writeText(fileNameWithExt)
    vscode.window.setStatusBarMessage(`✅ 已复制文件名: ${fileNameWithExt}`, 2000)
  })

  context.subscriptions.push(disposableWithoutExt, disposableWithExt)
}
