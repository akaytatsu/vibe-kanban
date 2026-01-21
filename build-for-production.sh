pnpm i
cd frontend && pnpm run build
cd .. && cargo build --release --bin server
sudo systemctl restart vibe-kanban.service
echo "Deployment complete!"