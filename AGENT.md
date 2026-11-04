# 项目管理约定

## 使用 GitHub CLI

- 使用 GitHub CLI（`gh`）管理本项目的 GitHub 事务，包括仓库信息、Issue、Pull Request、GitHub Actions 和 Release。
- 本项目的目标仓库是 `ChenyuanLiu92/ChenyuanLiu92.github.io`，对应 `origin`；不要误操作指向主题仓库的 `upstream`。
- 执行远程操作前，检查 `gh auth status` 和 `git remote -v`，确认登录状态及目标仓库。
- 对支持仓库参数的命令，显式指定 `--repo ChenyuanLiu92/ChenyuanLiu92.github.io`。使用 `gh api` 时，同样显式指定目标仓库路径。
- 优先使用 `gh` 原生命令；仅在原生命令不支持所需功能时使用 `gh api`。
- 如果 `gh` 不可用或尚未登录，说明阻塞原因，不要索取或在文件、日志中记录访问令牌。

## 操作范围

- 本地版本控制仍使用 `git`，包括查看状态、比较变更、暂存和提交；GitHub 上的管理操作使用 `gh`。
- 仅执行用户请求范围内的操作。未经明确要求，不自动提交、推送、创建或合并 PR、发布 Release、删除资源或修改仓库设置。
- 提交前检查变更范围，保留用户已有修改，不夹带无关变更。
- 远程操作完成后，报告结果及相关链接；失败时说明原因，不宣称操作成功。
